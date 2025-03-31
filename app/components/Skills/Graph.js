"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

export default function Graph({ title, data }) {
  const ref = useRef();
  const containerRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const chart = svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.skill))
      .range([0, width])
      .padding(0.3);

    const y = d3.scaleLinear().domain([0, 100]).range([height, 0]);

    chart.append("g").call(d3.axisLeft(y).tickValues(d3.range(0, 101, 20)));

    chart
      .selectAll(".icon")
      .data(data)
      .enter()
      .append("image")
      .attr("href", (d) => `/${d.icon}.svg`)
      .attr("x", (d) => x(d.skill) + x.bandwidth() / 2 - 12)
      .attr("y", height + 10)
      .attr("width", 24)
      .attr("height", 24);

    chart
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .remove();

    const bars = chart
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.skill))
      .attr("y", height)
      .attr("width", x.bandwidth())
      .attr("height", 0)
      .attr("fill", "#facc15");

    if (visible) {
      bars
        .transition()
        .duration(2000)
        .delay((_, i) => i * 100)
        .attr("y", (d) => y(d.value))
        .attr("height", (d) => height - y(d.value));
    } else {
      bars.transition().duration(1000).attr("y", height).attr("height", 0);
    }
  }, [visible, data]);

  return (
    <div ref={containerRef} className="mb-10 flex flex-col items-center">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <svg ref={ref}></svg>
    </div>
  );
}

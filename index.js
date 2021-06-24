(function (d3) {
    console.log(d3);
    const svg = d3.select('svg');
    svg.style('background-color', 'red');
    //Extract tag attributes! PLUS SIGN PARSES INTO NUMBER!!!
    const width = +svg.attr('width');
    const height = +svg.attr('height');

    
    //Center object by svg height/width by 2! X -> width Y -> height
    const circle = svg.append('circle')
        .attr('cx', width/2)
        .attr('cy', height/2)
        .attr('fill', 'yellow')
        .attr('stroke', 'orange')
        .attr('r', 500/2 - 50);
    const left_eye = svg.append('circle')
        .attr('r', 10)
        .attr('cx', width / 2 - 100)
        .attr('cy', height / 2 + 10)
        .attr('fill', 'black');
    const right_eye = svg.append('circle')
        .attr('r', 10)
        .attr('cx', width / 2 + 100)
        .attr('cy', height / 2 + 10)
        .attr('fill', 'black');
    const g = svg.append('g')
        .attr('transform', `translate(${width/2}, 200)`)
    const mouth = g.append('path')
        .attr('fill', 'black')
        .attr('d', arc()({
        innerRadius: 80,
        outerRadius: 100,
        startAngle: Math.PI / 2,
        endAngle: Math.PI / 2
        }));
    //3:03:00
}(d3));

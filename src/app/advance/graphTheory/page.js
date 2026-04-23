import React from 'react';
import styles from './graphTheory.module.css';

export default function Page() {
	return (
		<main className={styles.container}>
			<header className={styles.header}>
				<h1 className={styles.title}>Graph Theory</h1>
				<p className={styles.subtitle}>Study of vertices and edges — structure, connectivity, and algorithms.</p>
			</header>

			<div className={styles.content}>
				<section className={styles.section}>
					<h3>Basic Definitions</h3>
					<p>Graph theory studies networks of nodes and the connections between them.</p>
					<ul className={styles.list}>
						<li><strong>Graph</strong>: a set of <span className={styles.highlight}>vertices</span> and <span className={styles.highlight}>edges</span>.</li>
						<li><strong>Vertex (Node)</strong>: a single element of a graph.</li>
						<li><strong>Edge</strong>: a connection between two vertices (can be directed or undirected).</li>
						<li><strong>Directed / Undirected</strong>: edges may have direction (u → v) or be bidirectional.</li>
						<li><strong>Weighted</strong>: edges can carry weights representing cost, distance, or capacity.</li>
					</ul>
				</section>

				<section className={styles.section}>
					<h3>Common Concepts</h3>
					<ul className={styles.list}>
						<li><strong>Degree</strong>: number of edges incident to a vertex.</li>
						<li><strong>Path</strong>: sequence of edges connecting vertices.</li>
						<li><strong>Cycle</strong>: a path that starts and ends at the same vertex.</li>
						<li><strong>Connectedness</strong>: whether every pair of vertices has a path between them.</li>
						<li><strong>Tree</strong>: a connected acyclic graph.</li>
					</ul>
				</section>

				<section className={styles.section}>
					<h3>Example: Adjacency List (JavaScript)</h3>
					<pre className={styles.code}>{`const graph = {
	A: ['B', 'C'],
	B: ['A', 'D', 'E'],
	C: ['A', 'F'],
	D: ['B'],
	E: ['B', 'F'],
	F: ['C', 'E']
};

// Simple BFS to check connectivity
function bfs(start) {
	const q = [start];
	const visited = new Set([start]);
	while (q.length) {
		const v = q.shift();
		for (const n of graph[v] || []) {
			if (!visited.has(n)) {
				visited.add(n);
				q.push(n);
			}
		}
	}
	return visited;
}

console.log(bfs('A'));`}</pre>
				</section>

				<section className={styles.section}>
					<h3>Resources</h3>
					<div className={styles.resources}>
						<a className={styles.chip} href="https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)" target="_blank" rel="noreferrer">Graph — Wikipedia</a>
						<a className={styles.chip} href="https://cp-algorithms.com/graph/" target="_blank" rel="noreferrer">CP‑Algorithms (Graphs)</a>
						<a className={styles.chip} href="https://www.khanacademy.org/computing/computer-science/algorithms" target="_blank" rel="noreferrer">Khan Academy: Algorithms</a>
					</div>
				</section>
			</div>
		</main>
	);
}

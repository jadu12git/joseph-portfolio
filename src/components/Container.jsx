import React from "react";

export default function Container({ title, subtitle, children }) {
  return (
    <main className="page">
      <section className="glass">
        {title && (
          <div className="page-head">
            <h1 className="title">{title}</h1>
            {subtitle && <p className="subtitle">{subtitle}</p>}
          </div>
        )}
        {children}
      </section>
    </main>
  );
}

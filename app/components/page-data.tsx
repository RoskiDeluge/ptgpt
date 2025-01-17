export function PageData({ data }: { data: any }) {
  return (
    <>
      <main>
        <h1>ptGPT</h1>
        <p className="description">
          ChatGPT Plugin to get parenting advice from the Parents Together
          website.
        </p>

        <div className="meta">
          <div className="info">
            <span>Search Result:</span>
            <span className="region">
              <strong>{data.title}</strong>
            </span>
          </div>
          <div className="info">
            <span>Parents Together Site</span>
            <div>{data.excerpt}</div>
            <div>{data.content}</div>
          </div>
        </div>
      </main>
    </>
  );
}

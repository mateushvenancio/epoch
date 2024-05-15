import './style.css';

export function Key({ data }: { data: number | string }) {
    return <div className="key">{data}</div>;
}

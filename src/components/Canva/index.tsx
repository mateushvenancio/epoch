import { Input } from '..';
import './style.css';

function Row() {
    return (
        <div className="row">
            <Input />
            <Input />
            <Input />
            <Input />
        </div>
    );
}

export function Canva() {
    return (
        <div className="canva">
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
        </div>
    );
}

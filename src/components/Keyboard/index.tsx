import { Key } from '../Key';

import './style.css';

const firstRow = [7, 8, 9];
const secondRow = [4, 5, 6];
const thirdRow = [1, 2, 3];

export function Keyboard() {
    return (
        <div className="keyboard">
            <div className="row">
                {firstRow.map((e) => (
                    <Key data={e} />
                ))}
            </div>
            <div className="row">
                {secondRow.map((e) => (
                    <Key data={e} />
                ))}
            </div>
            <div className="row">
                {thirdRow.map((e) => (
                    <Key data={e} />
                ))}
            </div>
        </div>
    );
}

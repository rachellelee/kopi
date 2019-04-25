export default function GameStyle() {
    return (<style jsx="true">{`
        div {
            font-size: 24px;
            padding: 0;
            margin: 0;
            line-height: 16px;
            font-family: Courier New, Courier, monospace;
        }
        a {
            text-decoration: none;
            color: blue;
        }
        a:hover {
            font-weight: 800;
        }
        .blank {
            color: white;
        }
        .row {
            display: flex;
            flex-direction: row;
        }
        .section {
            display: flex;
            align-items: center;
            flex-direction: column;
        }
    `}</style>);
}

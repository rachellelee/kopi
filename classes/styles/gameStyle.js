export default function GameStyle() {
    return (<style jsx="true">{`
        div {
            font-size: 24px;
            padding: 0;
            margin: 0;
            line-height: 16px;
            font-family: Courier New, Courier, monospace;
        }
        .section {
            display: flex;
            align-items: center;
            flex-direction: column;
        }
    `}</style>);
}

export default function ForestStyle() {
    return (<style jsx="true">{`
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
    `}</style>);
}

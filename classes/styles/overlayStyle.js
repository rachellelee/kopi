export default function OverlayStyle() {
    return (<style jsx="true">{`
        .overlay {
            position: relative;
        }
        .overlay .example {
            position: inherit;
            right: 100px;
            top: 100px;
            color: red;
        }
    `}</style>);
}

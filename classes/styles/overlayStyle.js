export default function OverlayStyle() {
    return (<style jsx="true">{`
        .overlay {
            position: relative;
            width: 36px;
            height: 36px;
        }
        .overlay .example {
            position: inherit;
            right: 100px;
            top: 100px;
            color: red;
        }
    `}</style>);
}

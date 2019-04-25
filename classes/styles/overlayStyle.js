export default function OverlayStyle() {
    return (<style jsx="true">{`
        .overlay {
            position: relative;
        }
        .overlay .wsup {
            position: inherit;
            right: 100px;
            top: 100px;
            color: red;
        }
    `}</style>);
}

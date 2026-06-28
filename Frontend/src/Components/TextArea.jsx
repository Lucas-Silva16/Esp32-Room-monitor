function TextArea({
    title,
    className = "",
    titleClassName = "",
    contentClassName = "",
    children,
}) {
    return (
        <section className={className}>
            {title ? (
                <h1 className={`text-[25px] font-mono font-bold text-center mb-2 text-white ${titleClassName}`.trim()}>
                    {title}
                </h1>
            ) : null}
            <div className={`text-base font-mono text-center leading-7 max-w-7xl mx-auto text-slate-300 ${contentClassName}`.trim() }>
                {children}
            </div>
        </section>
    )
}

export default TextArea
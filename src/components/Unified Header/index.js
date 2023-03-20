import React from "react";

export default function UnifiedHeader(props)
{
    return (
        <div className="unified-header">
			<h1>{props.header}</h1>
		</div>
    )
}
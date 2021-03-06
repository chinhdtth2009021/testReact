import React from "react";

export default function Button(props) {
    return (
        <button
            type="button"
            className="btn toggle-btn"
            aria-pressed={props.completed}
            onClick={() => props.setFilter(props.name)}>
            <span className="visually-hidden">Show </span>
            <span>{props.name}</span>
            <span className="visually-hidden"> tasks</span>
        </button>
    );
}
import React from 'react';

type TodolistPropsType = {
    arr: Array<InArrayPropsType>
}
type InArrayPropsType = {
    manufacturer: string,
    model: string
}

export const Todolist = (props: TodolistPropsType) => {
    return (
        <table>
            <tr>
                <th>manufacturer</th>
                <th>model</th>
            </tr>
            {props.arr.map((elem, index) => {
                return (
                    <tr>
                        <td>{index + 1} - {elem.manufacturer}</td>
                        <td>{elem.model}</td>
                    </tr>
                )
            })}
        </table>
    )
}
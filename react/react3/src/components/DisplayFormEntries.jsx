const DisplayFormEntries = (props) => {

    // props is a object of attributes/args that are sent while calling/mounting/rendering the Component.

    // console.log(props)

    return (
        <tr className="bg-neutral-primary border-b border-default">
            <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                {props.itemToDisplay.name}
            </th>
            <td className="px-6 py-4">
                {props.itemToDisplay.phone}
            </td>
            <td className="px-6 py-4">
                {props.itemToDisplay.email}
            </td>
            <td className="px-6 py-4">
                {props.itemToDisplay.address}
            </td>
            <td className="px-6 py-4">
                {props.itemToDisplay.password}
            </td>
        </tr>
    )
}

export { DisplayFormEntries }
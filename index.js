const KITCHEN_TOOL_URL = "https://659d7119633f9aee79096f5e.mockapi.io/PTapi/kitchenTools"



$.get(KITCHEN_TOOL_URL).then((data) =>
    data.map((tool) => {
        $('tbody').append(
            $(`
        <tr>
            <td>${tool.id}</td>
            <td>${tool.Name}</td>
            <td>${tool.quantity}</td>
            <td>
                <button onclick="deleteTool(${tool.id})"}>Delete</button>
            </td>
        </tr>`)
        )
    })
)

$('#submitTool').on('click', function () {
    $.post(KITCHEN_TOOL_URL, {
        Name: $('#newTool').val(),
        quantity: $('#newQuantity').val(),
    })
})

function deleteTool(id) {
    $.ajax(`${KITCHEN_TOOL_URL}/${id}`, {
        type: 'DELETE',
    })
}

function updateTool() {
    id = $('#updateID').val()

    $.ajax(`${KITCHEN_TOOL_URL}/${id}`, {
        method: 'PUT',
        data: {
            Name: $('#updateTool').val(),
            quantity: $('#updateQuantity').val(),
        },
    })
}
$('#updateKitchenTool').on("click", (updateTool))


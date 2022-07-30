    function toggleCheckbox(element) {
        switch (element.value) {
            case "mx":
                document.getElementById("mr").checked = document.getElementById("mrs").checked = document.getElementById("miss").checked = false;
                break;
            case "mr":
                document.getElementById("mx").checked = document.getElementById("mrs").checked = document.getElementById("miss").checked = false; break;
            case "mrs":
                document.getElementById("mx").checked = document.getElementById("mr").checked = document.getElementById("miss").checked = false; break;
            case "miss":
                document.getElementById("mx").checked = document.getElementById("mr").checked = document.getElementById("mrs").checked = false; break;
        }
    }
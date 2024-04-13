let currdisplay = '';
        document.querySelector('#display').value = currdisplay;
        function deleteLast() {
            currdisplay = currdisplay.slice(0, -1);
            document.querySelector('#display').value = currdisplay;
        }
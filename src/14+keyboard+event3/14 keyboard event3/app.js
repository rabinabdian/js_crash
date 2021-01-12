const firstNameInput = document.getElementById('first_name') // <input placeholder="Placeholder" id="first_name" type="text" class="validate">
const heading = document.querySelector('h3') // <h3>heading2</h3>
const form = document.querySelector('form') //
const select = document.querySelector('select')
    /**<select>
                            <option value="" disabled="" selected="">Choose your option</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select> */





const lnTxtx = document.querySelector('#last_name')
form.addEventListener('submit', run)
select.addEventListener('change', run)
lnTxtx.addEventListener('input', run)

function run(e) {
    e.preventDefault();

    console.log('Event type: ' + e.type)
    heading.innerText = e.target.value
}
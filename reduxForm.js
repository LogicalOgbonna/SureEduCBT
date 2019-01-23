// *
//  * Render a single form field.
//  *
//  * @param {Object} props
//  * @returns {React.Component}

function renderFormField({ input, label, type, meta: { touched, error } }) {
  if (type === "select") {
    return (
      <div className="form-field">
        <label htmlFor={input.id}>{label}</label>
        <select {...input}>
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="boolean">True/False</option>
        </select>
      </div>
    );
  }

  return (
    <div>
      <label htlmFor={input.id}>{label}</label>
      <div>
        <input {...input} type={type} placeholder={label} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
}

/*
 * Item renderer for redux-form's `FieldArray` component.
 * {@link http://redux-form.com/6.6.0/docs/api/FieldArray.md/}
 *
 * @param {Object} item
 * @param {number} index
 * @param {Object} fields
 * @returns {React.Component}
 */
function renderFormItem(item, index, fields) {
  function handleClick() {
    fields.remove(index);
  }

  return (
    <li className="form-item" key={index}>
      <Field
        component={renderFormField}
        label="Name:"
        name={item.toString() + ".name"}
        type="text"
      />
      <Field
        component={renderFormField}
        label="Type:"
        name={item.toString() + ".type"}
        type="select"
      />
      <button className="btn" onClick={handleClick} type="button">
        <span aria-hidden="true" className="material-icons">
          remove
        </span>
        Remove
      </button>
    </li>
  );
}

function renderFormItems(props) {
  var fields = props.fields;
  function addItem() {
    fields.push({});
  }

  return (
    <div>
      <ul className="form-items">{fields.map(renderFormItem)}</ul>
      <button className="btn" onClick={addItem} type="submit">
        <span aria-hidden="true" className="material-icons">
          add
        </span>
        Add Item
      </button>
    </div>
  );
}

function renderFormModeSwitcher(props) {
  var input = props.input;

  return (
    <fieldset>
      <legend>Switch Form</legend>
      <div className="radio">
        <input
          checked={input.value === "fancy"}
          id="option-fancy"
          name={input.name}
          onChange={input.onChange}
          type="radio"
          value="fancy"
        />
        <label htmlFor="option-fancy">Fancy</label>
      </div>
      <div className="radio">
        <input
          checked={input.value === "unfancy"}
          id="option-unfancy"
          name={input.name}
          onChange={input.onChange}
          type="radio"
          value="unfancy"
        />
        <label htmlFor="option-unfancy">Unfancy</label>
      </div>
    </fieldset>
  );
}

function renderForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={renderFormModeSwitcher} name="formMode" />
      <FieldArray component={renderFormItems} name="items" />
      <button className="btn" type="submit">
        <span aria-hidden="true" className="material-icons">
          save
        </span>
        Save
      </button>
      <button className="btn" onClick={props.reset} type="reset">
        <span aria-hidden="true" className="material-icons">
          clear
        </span>
        Cancel
      </button>
    </form>
  );
}

var DecoratedForm = reduxForm({
  form: "dynamic-redux-form",
  initialValues: {
    formMode: "fancy",
    items: [{}]
  }
})(renderForm);

class App extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(values) {
    console.log(values);
  }
  render() {
    return <DecoratedForm onSubmit={this.submit} />;
  }
}

var ConnectedApp = connect()(App);

import React from 'react';

export default function Filter({ value, onChange }) {
  return (
    <div className="inputForm">
      <label className="inputLabel">
        Find contacts by name
        <input
          className="inputField"
          type="text"
          value={value}
          onChange={onChange}
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Roman Kovalchuk"
          required
        />
      </label>
    </div>
  );
}

import React from 'react';
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
  return (
    <div className="CreateAccount">
      <div className="CreateAccount-container">
        <h1 className="title">My account</h1>
        <form action="/" className="form" id="form-create">
          <div>
            <label for="name" className="label" htmlFor="form-create">
              Name
            </label>
            <input type="text" id="name" placeholder="Teff" className="input input-name" />
            <label for="email" className="label" htmlFor="form-create">
              Email
            </label>
            <input type="text" id="email" placeholder="platzi@example.com" className="input input-email" />
            <label for="password" className="label" htmlFor="form-create">
              Password
            </label>
            <input type="password" id="password" placeholder="*********" className="input input-password" />
          </div>
          <input type="submit" value="Create" className="primary-button login-button" />
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;

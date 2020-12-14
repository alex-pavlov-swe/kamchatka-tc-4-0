import React from 'react';

const NetlifyForm = () => {
  return (
    <div className="row mt-5">
      <div className="col-md-8 mx-auto">
        <form name="contact" method="POST" netlify class="m-5">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" class="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" class="form-control" required />
          </div>
          <button
            type="submit"
            value="submit"
            class="btn btn-primary btn-block"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NetlifyForm;

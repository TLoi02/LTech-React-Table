import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import {fetchUsers} from '../services/UserService';
import ReactPaginate from 'react-paginate';
import ModalAddUser from './ModelAddUser';

const TableUsers = (props) => {
  const [listUsers, setListUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [showModalUser, setShowModalUser] = useState(false);

  const getUsers = async (page) => {
    let res = await fetchUsers(page);
    if (res && res.data){
      setTotalPages(res.total_pages);
      setListUsers(res.data)
    }
  }

  useEffect(()=>{
    getUsers(1);
  },[])

  const handlePageClick = (event) => {
    getUsers(parseInt(event.selected)+1)
  }

  const handleClose = () => {
    setShowModalUser(false);
  }

  return (
    <div className="container table-content">
      <div className='add__title'>
          <h3>List Users</h3>
          <button className='btn btn-success' onClick={()=>{setShowModalUser(true)}}>Add</button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            listUsers.map((user, index)=>{
              return (
                <tr key={`User key `+index}>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>
                    <button class="btn btn-warning m-3">Update</button>
                    <button class="btn btn-danger">Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      <div className='paging'>
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={totalPages}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>

      <ModalAddUser
        show = {showModalUser}
        handleClose = {handleClose}
      />
    </div>
  );
};

export default TableUsers;

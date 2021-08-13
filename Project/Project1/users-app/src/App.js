import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
	const [userList, setUserList] = useState([]);

	const handleAddUser = (name, age) => {
		setUserList(prevState => {
			return [...prevState, { name, age, id: Math.random().toString() }];
		});
	};

	return (
		<div>
			<AddUser onAddUser={handleAddUser} />
			<UserList users={userList} />
		</div>
	);
}

export default App;

export const Users = (props: any) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: '1',
        isFollow: true,
        avatarSrc:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEdaR-n2haIJL-Ys0ZZKADyIdAzG_RUWX4sg&usqp=CAU',
        fullName: 'Alex',
        status: 'I am frontend developer',
        location: { city: 'Zarechniy', country: 'Russia' }
      },
      {
        id: '2',
        isFollow: false,
        avatarSrc:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEdaR-n2haIJL-Ys0ZZKADyIdAzG_RUWX4sg&usqp=CAU',
        fullName: 'Ksu',
        status: 'I am frontend developer',
        location: { city: 'Penza', country: 'Russia' }
      },
      {
        id: '3',
        isFollow: true,
        avatarSrc:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEdaR-n2haIJL-Ys0ZZKADyIdAzG_RUWX4sg&usqp=CAU',
        fullName: 'Lev',
        status: 'I am frontend developer',
        location: { city: 'Berlin', country: 'Germany' }
      },
      {
        id: '4',
        isFollow: false,
        avatarSrc:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEdaR-n2haIJL-Ys0ZZKADyIdAzG_RUWX4sg&usqp=CAU',
        fullName: 'Alexandr',
        status: 'I am frontend developer',
        location: { city: 'Miami', country: 'USA' }
      }
    ])
  }

  return props.users.map((user: any) => (
    <div key={user.id}>
      <span>
        <div>
          <img src={user.avatarSrc} alt={user.fullName} />
        </div>
        <div>
          {user.isFollow ? (
            <button onClick={() => props.unFollow(user.id)}>Unfollow</button>
          ) : (
            <button onClick={() => props.follow(user.id)}>Follow</button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.fullName}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>Страна: {user.location.country}</div>
          <div>Город: {user.location.city}</div>
        </span>
      </span>
    </div>
  ))
}

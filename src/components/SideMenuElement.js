import './SideMenuElement.css';

const SideMenuElement = (props) => {
  return (
    <div className='Side-Menu-Element'>
        <svg enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false"><g><path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path></g></svg>
        <p>{props.name}</p>
    </div>
  )
}

export default SideMenuElement
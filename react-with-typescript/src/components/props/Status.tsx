type StatusProps = {
    status: 'loading' | 'success' | 'error';
}

export const Status = (props: StatusProps) => {

    let message;

    if(props.status === 'loading') {
        message = 'Laoding....'
    } 
    else if(props.status === 'success') {
        message = 'Data Fetched Successfully.'
    }
    else if(props.status === 'error') {
        message = 'Error Fetching the Data..'
    }
  return (
    <div>
       <h2>Status - {message}</h2>
    </div>
  )
}

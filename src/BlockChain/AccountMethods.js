export const getBalance = () => {
    return (dispatch, getState) => {
      const state = getState().Home
      web3r.eth.getBalance(state.baseAccount,'latest',(err, result)=>{
        dispatch({
          type: BALANCE,
          value: result.toNumber()
        })
      })
    }
  }
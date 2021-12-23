import react from 'react'

const Scrollbaritem = ({ img, price }) => {
    return (
        <>

            <div className="" style={{ width: "250px", }} >
                <img src={img} />
                <div>{price}</div>

            </div>


        </>
    )
}
export default Scrollbaritem
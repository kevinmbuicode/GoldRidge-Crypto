import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-row justify-between'>
        <div>
            <select name="cars" id="cars">
                <option value="all-coins">USD</option>
                <option value="best-worst">EUR - EURO</option>
                <option value="nft-tokens">GBP - British Pound Sterling</option>
                <option value="nft-tokens">KSH - Kenya Shillings</option>
            </select>
        </div>
        <div>
            <h2>Products</h2>
            <p>Advertise</p>
            <p>Coinranking API</p>
            <p>Coinhodler</p>
            <p>Android App</p>
            <p>Windows App</p>
        </div>
        <div>
            <h2>Resources</h2>
            <p>List a cryptocurrency</p>
            <p>Edit a cryptocurrency</p>
            <p>API documentation</p>
            <p>API reference</p>
            <p>Support and FAQ</p>
            <p>Community Forum</p>
        </div>
        <div>
            <h2>Info</h2>
            <p>About us</p>
            <p>Methodology</p>
            <p>Changelog</p>
            <p>Branding</p>
            <p>Feedback</p>
            <p>Contact</p>
        </div>
        <div>
            <h2>Social</h2>
            <p>Twitter</p>
            <p>Twitter</p>
            <p>Twitter</p>
            <p>Twitter</p>
            <p>Twitter</p>
            <p>Twitter</p>
        </div>
    </div>
  )
}

export default Footer
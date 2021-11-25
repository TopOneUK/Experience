import React from 'react'
import data from '../../data/Database';

export default function Address() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Reg No</th>
            <td className="IBAN">{data.bankInfo.registrationNumber}</td>
          </tr>
          <tr>
            <th>VAT No</th>
            <td className="IBAN">{data.bankInfo.vatNumber}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td className="accountName">{data.bankInfo.accountName}</td>
          </tr>
          <tr>
            <th style={{ whiteSpace: "nowrap" }}>Account No</th>
            <td className="accountNumber">{data.bankInfo.accountNumber}</td>
          </tr>
          <tr>
            <th>Sort Code</th>
            <td className="accountNumber">{data.bankInfo.accountSort}</td>
          </tr>
          <tr>
            <th>IBAN</th>
            <td className="IBAN">{data.bankInfo.IBAN}</td>
          </tr>
          <tr>
            <th>Reference</th>
            <td className="reference">
              {window.location.pathname.replace(/\//g, "")}
            </td>
          </tr>
        </tbody>
      </table>
    );
}

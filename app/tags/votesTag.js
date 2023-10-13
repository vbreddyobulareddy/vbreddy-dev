import React from "react";
import { gql, useQuery } from "@apollo/client";

const votesQuery = gql`
  query ExampleQuery {
    votes {
      id
    }
  }
`;

const VotesTag = () => {
  const { data } = useQuery(votesQuery);
  console.log("--==VotesTag::Data ", data);
  return (
    <>
      <div>VotesTag</div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.votes.map((rec) => {
              return (
                <tr key={rec.id}>
                  <td>{rec.id}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default VotesTag;

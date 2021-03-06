import _ from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import { Professor } from "../../models/Professor";
import { List } from "../molecules/List";
import { Panel } from "../molecules/Panel";

export const ProfessorsTemplate = ({
  professors,
}: {
  course?: number;
  professors: Professor[];
}) => {
  const professorsPanel: JSX.Element[] = [];

  const alphabeticalOrder = _.orderBy(professors, ["name"], ["asc"]);

  const createLink = (professorId: number) => {
    return `professor/${professorId}`;
  };

  const professorLinks = alphabeticalOrder.map((professor) => {
    return (
      <Link key={professor.id} to={createLink(professor.id)}>
        {professor.name}
      </Link>
    );
  });

  professorsPanel.push(
    <div className="column is-8" key="professor">
      <Panel
        content={<List className={"list-items"} data={professorLinks} />}
      />
    </div>
  );

  return <div className="columns is-centered">{professorsPanel}</div>;
};

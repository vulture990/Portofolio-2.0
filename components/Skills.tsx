import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto",
  },
  table: {
    minWidth: 400,
  },
});

function createData(name: string, detail: string) {
  return { name, detail };
}

const number:number | undefined=5;

const rows = [
  createData(
    "⚛️  Front-End",
    "React,Redux ,NextJS,Gatsby, TailwindCSS,Material-UI,Figma  "
  ),
  createData("🐱‍💻 Back-End", "Django , NodeJS,Express"),
  createData("📙 Database", "MongoDB,Postgres,MYSQL,Firebase"),
  createData("📱 GameDev and Mobile", "Unity,Flutter,Blender"),
  createData(
    " 🐳 DevOps & Tools",
    "Git,Github Actions,Docker,Trello, Heroku-CLI,AWS S3-Buckets"
  ),
];

const ExpandableTableRow: FC<{ expandComponent: any }> = ({
  children,
  expandComponent,
  ...otherProps
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <>
      <TableRow {...otherProps}>
        <TableCell padding="checkbox">
          <IconButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {children}
      </TableRow>
      {isExpanded && (
        <TableRow>
          <TableCell padding="checkbox" />
          {expandComponent}
        </TableRow>
      )}
    </>
  );
};

export default function Skills() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" />
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map(row => (
            <React.Fragment key={row.name}>
              <TableRow>
                <TableCell padding="checkbox">
                  <IconButton>
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            </React.Fragment>
          ))} */}
          {rows.map((row) => (
            <ExpandableTableRow
              key={row.name}
              expandComponent={
                <TableCell colSpan={number}>
                  <div className="text-left text-paragraph  font-display text-lg sm:text-2xl  font-meduim  italic">
                    {row.detail}
                  </div>
                </TableCell>
              }
            >
              <TableCell component="th" scope="row">
                <div className="text-left text-paragraph  font-display text-lg sm:text-2xl  font-semibold  italic">
                  {row.name}
                </div>
              </TableCell>
            </ExpandableTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

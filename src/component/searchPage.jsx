import React from 'react';
import '../App.css';
import Flexbox from 'flexbox-react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import {
    getAllDetails,
    updateEmployeeData
} from "../action"

class SearchPage extends React.Component {
    constructor() {
        super();
        this.state = {
            isEdit: false,
            index: 0,
            value: ""
        }
    }

    componentDidMount() {
        this.props.getAllDetails();
    }

    handleNameChange(index, e, row) {
        // const { employeeData } = this.props;
        // row.employee_name = e.target.value;
        // employeeData.splice(index, 1, row);
        // this.props.updateEmployeeData(employeeData);
        this.setState({ value: e.target.value })
    }

    getNameColumn(index, row) {

        if (this.state.isEdit && this.state.index === index) {

            return (<TextField value={this.state.value}
                onChange={(e) => this.handleNameChange(index, e, row)}
            />);
        } else {
            return row.employee_name;
        }
    }
    updateStore(row, index) {
        const { employeeData } = this.props;
        row.employee_name = this.state.value;
        employeeData.splice(index, 1, row);
        this.props.updateEmployeeData(employeeData);
        this.setState({ isEdit: false });
    }
    render() {
        return (
            <Flexbox flexDirection="column" justifyContent="space-between" >
                <Flexbox>
                    <Paper className="table-paper">
                        <Table style={{ height: 500 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>{"Id"}</TableCell>
                                    <TableCell>{"Employee Name"}</TableCell>
                                    <TableCell>{"Salary"}</TableCell>
                                    <TableCell>{"Age"}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.employeeData.map((row, index) => (
                                    <TableRow key={row.id}>
                                        <TableCell >{row.id}</TableCell>
                                        <TableCell onBlur={(e) => this.updateStore(row, index)}
                                            onClick={(e) => this.setState({ isEdit: true, index, value: row.employee_name })}>
                                            {this.getNameColumn(index, row)}
                                        </TableCell>
                                        <TableCell >{row.employee_salary}</TableCell>
                                        <TableCell >{row.employee_age}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Flexbox>
            </Flexbox>
        );
    }
}
const mapStateToProps = state => ({
    employeeData: state.Employee.employeeData
});

const mapActionToProps = {
    getAllDetails,
    updateEmployeeData
}

export default connect(mapStateToProps, mapActionToProps)(SearchPage);

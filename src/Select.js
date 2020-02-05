import React, { Component } from "react";
import { Select, Box, TextInput } from "grommet";
import SandboxComponent from "./SandboxComponent";

const OPTIONS = ["First", "Second", "Third"];

export default class extends Component {
  state = { value: [], options: OPTIONS };

  render() {
    const { options, value } = this.state;
    return (
      <SandboxComponent>
        <Box direction="row">
          <TextInput defaultValue="Testz" />
          <Select
            multiple={true}
            value={value}
            onSearch={searchText => {
              const regexp = new RegExp(searchText, "i");
              this.setState({ options: OPTIONS.filter(o => o.match(regexp)) });
            }}
            onChange={event =>
              this.setState({
                value: event.value,
                options: OPTIONS
              })
            }
            options={options}
          />
        </Box>
      </SandboxComponent>
    );
  }
}

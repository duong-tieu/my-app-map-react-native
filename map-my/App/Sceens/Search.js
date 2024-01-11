import React, { Component } from "react";
import { TextInput, Button, View } from "react-native";

class SearchBox extends Component {
  state = {
    searchText: "",
  };

  onSearch = () => {
    this.props.onSearch(this.state.searchText);
  };

  render() {
    return (
      <View style={{ flexDirection: "row", alignItems: "center"}}>
        <TextInput
          placeholder="Search for a location"
          style={{ width: "80%", borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => this.setState({ searchText: text })}
        />
        <Button title="Search" onPress={this.onSearch} />
      </View>
    );
  }
}

export default SearchBox;

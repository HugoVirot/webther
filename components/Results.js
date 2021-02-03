import React from 'react'
import { View, Text, SectionList } from 'react-native'

export default class Results extends React.Component {

    render() {
        if (this.props.report) {
            console.log(this.props.report);
            return (
                <View>
                    <Text>Recherche pour : {this.props.location}</Text>
                    {/* <SectionList
                        sections={this.props.report}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => <Item title={item} />}
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={styles.header}>{title}</Text>
                        )}
                    /> */}
                </View>
            )
        } else {
            return (
                <Text></Text>
            )
        }
    }
}
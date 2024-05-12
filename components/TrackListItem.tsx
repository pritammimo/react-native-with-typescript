import { unknownTrackImageUri } from "@/constants/Images"
import { colors, fontSize } from "@/constants/Tokens"
import { defaultStyles } from "@/styles"
import { StyleSheet, Text, TouchableHighlight, View } from "react-native"
import FastImage from "react-native-fast-image"
export type TrackListItemProps = {
    track:{title:string,image?:string,artist:string}
}
export const TrackListItem =({track}:TrackListItemProps)=>{
    const isActiveTrack=false
    return <TouchableHighlight>
        <View>
            <FastImage
            source={{
                uri:track.image??unknownTrackImageUri,
                priority:FastImage.priority.normal
            }}
            style={{
                ...styles.trackArtworkImage,
               opacity:isActiveTrack?0.6:1
            }}
            />
        </View>
    <View style={{width:'100%'}}>
     <Text 
     numberOfLines={1}
     style={{...styles.trackTitleText,
    color:isActiveTrack?colors.primary:colors.text
    }}
     >{track.title}</Text>
     {track.artist&&<Text style={styles.trackArtistText} numberOfLines={1}>{track.artist}</Text>}
        </View>
    </TouchableHighlight>
}
const styles = StyleSheet.create({
	trackItemContainer: {
		flexDirection: 'row',
		columnGap: 14,
		alignItems: 'center',
		paddingRight: 20,
	},
	trackPlayingIconIndicator: {
		position: 'absolute',
		top: 18,
		left: 16,
		width: 16,
		height: 16,
	},
	trackPausedIndicator: {
		position: 'absolute',
		top: 14,
		left: 14,
	},
	trackArtworkImage: {
		borderRadius: 8,
		width: 50,
		height: 50,
	},
	trackTitleText: {
		...defaultStyles.text,
		fontSize: fontSize.sm,
		fontWeight: '600',
		maxWidth: '90%',
	},
	trackArtistText: {
		...defaultStyles.text,
		color: colors.textMuted,
		fontSize: 14,
		marginTop: 4,
	},
})
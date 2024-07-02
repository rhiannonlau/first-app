// (..) in the folder name (..)photos creates an intercepting route

// intercepting routes allow you to view a modal with the photo when clicking
// on a photo in feed, displayed over the feed
// however, navigating to the photo by url or refreshing brings you to the actual
// photo instead of just the modal, i.e. w/o interception
// specifically in this case: the photo segment is intercepted by (..)photo

// intercepting routes use parallel routes to create modals

// although photo and (..)photo are not both in feed, it's allowed
// because @modal is a slot, not a segment
// removing @modal and putting (..)photo directly in feed works too
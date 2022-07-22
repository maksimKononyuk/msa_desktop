import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  center: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cameraContainer: {
    height: '114%'
  },
  authInput: {
    width: '100%',
    backgroundColor: 'transparent',
    fontFamily: 'Roboto',
    fontSize: 18,
    marginTop: 10
  },
  authButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: 10,
    marginTop: 30
  },
  authText: {
    fontFamily: 'Montserrat',
    fontSize: 24,
    color: '#fff'
  },
  authError: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#E31E24',
    padding: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  authContainer: {
    width: 350,
    padding: 60,
    marginTop: -30,
    display: 'flex',
    alignItems: 'center'
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    width: '100%',
    height: 55,
    padding: 10,
    paddingTop: 23
  },
  headerName: {
    fontFamily: 'Roboto',
    fontSize: 15,
    color: '#fff',
    marginLeft: 10
  },
  headerComplete: {
    fontFamily: 'Roboto',
    fontSize: 15,
    color: '#707070',
    marginRight: 10
  },
  orderContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
    width: 260,
    padding: 8,
    backgroundColor: '#fff'
  },
  printButton: {
    width: 76,
    height: 36,
    backgroundColor: '#FFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  orderHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: '100%',
    padding: 20
  },
  operationContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    padding: 15,
    backgroundColor: '#fff',
    width: '100%',
    borderTopWidth: 3,
    borderTopColor: '#f2f2f2',
    elevation: 15
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    backgroundColor: '#fff'
  },
  sendContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 15
  },
  serverMessage: {
    margin: 10,
    padding: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 7,
    borderTopLeftRadius: 0,
    width: '90%'
  },
  myMessage: {
    margin: 10,
    padding: 10,
    backgroundColor: '#0080FF',
    borderRadius: 7,
    borderTopRightRadius: 0,
    width: '90%',
    alignSelf: 'flex-end'
  },
  operationItem: {
    justifyContent: 'space-between',
    width: '90%',
    padding: 20,
    marginVertical: 10,
    borderRadius: 4
  },
  cancelContainer: {
    borderRadius: 50,
    borderColor: '#707070',
    borderWidth: 1,
    padding: 10,
    width: 150,
    marginTop: 20
  },
  barCodeResult: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  versionText: {
    position: 'absolute',
    bottom: 10,
    left: 5,
    color: '#707070',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'bold'
  }
})

export default styles

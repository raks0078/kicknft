import React, { Component } from "react"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import TwitterIcon from "@material-ui/icons/Twitter"
import Popover from "@material-ui/core/Popover"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import "./Header.scss"
const styles = (theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
})

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      anchorEl: false,
      top100Films: [
        { title: "The Shawshank Redemption", year: 1994 },
        { title: "The Godfather", year: 1972 },
        { title: "The Godfather: Part II", year: 1974 },
        { title: "The Dark Knight", year: 2008 },
        { title: "12 Angry Men", year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: "Pulp Fiction", year: 1994 },
        { title: "The Lord of the Rings: The Return of the King", year: 2003 },
        { title: "The Good, the Bad and the Ugly", year: 1966 },
        { title: "Fight Club", year: 1999 },
        { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
        { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
        { title: "Forrest Gump", year: 1994 },
        { title: "Inception", year: 2010 },
        { title: "The Lord of the Rings: The Two Towers", year: 2002 },
        { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
        { title: "Goodfellas", year: 1990 },
        { title: "The Matrix", year: 1999 },
        { title: "Seven Samurai", year: 1954 },
        { title: "Star Wars: Episode IV - A New Hope", year: 1977 },
        { title: "City of God", year: 2002 },
        { title: "Se7en", year: 1995 },
        { title: "The Silence of the Lambs", year: 1991 },
        { title: "It's a Wonderful Life", year: 1946 },
        { title: "Life Is Beautiful", year: 1997 },
        { title: "The Usual Suspects", year: 1995 },
        { title: "Léon: The Professional", year: 1994 },
        { title: "Spirited Away", year: 2001 },
        { title: "Saving Private Ryan", year: 1998 },
        { title: "Once Upon a Time in the West", year: 1968 },
        { title: "American History X", year: 1998 },
        { title: "Interstellar", year: 2014 },
        { title: "Casablanca", year: 1942 },
        { title: "City Lights", year: 1931 },
        { title: "Psycho", year: 1960 },
      ],
      data: [
        { id: 1, label: "RARI Token" },
        { id: 2, label: "Discussion" },
        { id: 3, label: "Voting" },
        { id: 4, label: "Suggest feature" },
        { id: 5, label: "Subscribe" },
        { id: 6, icon: <TwitterIcon /> },
        { id: 7, icon: <TwitterIcon /> },
        { id: 8, icon: <TwitterIcon /> },
        { id: 9, icon: <TwitterIcon /> },
        { id: 10, icon: <TwitterIcon /> },
        { id: 11, icon: <TwitterIcon /> },
      ],
      comunityVal: "",
      open: false,
    }
  }

  handleDropdownChange = (e) => {
    const val = e.target.value
    const name = e.target.name
    this.setState({ [name]: val }, () => console.log("value", this.state.expiration))
  }

  setAnchorEl = (getValue) => {
    this.setState({
      anchorEl: getValue,
      open: getValue,
    })
  }
  handlePopOver = (e) => {
    this.setAnchorEl(true)
  }

  handleClose = () => {
    this.setAnchorEl(null)
  }
  render() {
    const { data, open } = this.state
    const { classes } = this.props
    return (
      <header>
        <div className="container">
          <div className="logo">K</div>
          <div className="content-right">
            <div className="search">
              <svg viewBox="0 0 16 16" fill="none" width="14" height="14" xlmns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7ZM7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C8.57591 14 10.0302 13.4792 11.2001 12.6004C11.2281 12.6376 11.259 12.6733 11.2929 12.7071L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L12.7071 11.2929C12.6733 11.259 12.6376 11.2281 12.6004 11.2001C13.4792 10.0302 14 8.57591 14 7C14 3.13401 10.866 0 7 0Z" fill="currentColor"></path>
              </svg>
              <Autocomplete freeSolo id="free-solo-2-demo" disableClearable options={this.state.top100Films.map((option) => option.title)} renderInput={(params) => <TextField {...params} placeholder="Search Kicknft" margin="normal" variant="outlined" InputProps={{ ...params.InputProps, type: "search" }} />} />
            </div>
            <div className="links">
              <ul>
                <li>
                  <a href="javascript:void(0)">Explore</a>
                </li>
                <li>
                  <a href="javascript:void(0)">My items</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Following</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Activity</a>
                  <svg width="30" height="14" viewBox="0 0 30 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="29" height="14" rx="7" fill="url(#paint0_radial)"></rect>
                    <path d="M11.044 10V4.328H9.78V7.776L7.652 4.328H6.116V10H7.372V6.272L9.708 10H11.044ZM15.8644 10V8.8H13.5284V7.712H15.6404V6.6H13.5284V5.52H15.8564V4.328H12.2644V10H15.8644ZM22.3676 7.968L21.1916 4.328H19.8956L18.7196 7.96L17.7836 4.328H16.4396L17.9836 10H19.3116L20.5276 6.24L21.7356 10H23.0396L24.5836 4.328H23.2876L22.3676 7.968Z" fill="white"></path>
                    <defs>
                      <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-10.6167 -5.6875) rotate(24.662) scale(36.6973 39.3316)">
                        <stop stop-color="#0C50FF"></stop>
                        <stop offset="0.557292" stop-color="#5B9DFF"></stop>
                        <stop offset="1" stop-color="#FF74F1"></stop>
                      </radialGradient>
                    </defs>
                  </svg>
                </li>
              </ul>
              <span className="divider"></span>
              <ul>
                <li>
                  <a href="javascript:void(0)">How it works</a>
                </li>
                <li>
                  {/* <Select
                    disableUnderline
                    classes={{
                      root: "select-root",
                      icon: "icon-root",
                    }}
                    value={this.state.comunityVal}
                    onChange={this.handleDropdownChange}
                    inputProps={{
                      name: `comunityVal`,
                    }}
                    IconComponent={ExpandMoreIcon}
                    MenuProps={{
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left",
                      },
                      transformOrigin: {
                        vertical: "top",
                        horizontal: "left",
                      },
                      getContentAnchorEl: null,
                      classes: { paper: "dropdown-paper" },
                    }}
                    displayEmpty
                  >
                    <MenuItem key={data.id} classes={{ root: "dropdown-item" }}>
                      Community
                    </MenuItem>

                    {data.map((option) => (
                      <MenuItem key={option.id} classes={{ root: "dropdown-item" }} value={option.label}>
                        {option.label}
                        {option.icon}
                      </MenuItem>
                    ))}
                  </Select> */}
                  <Button aria-describedby="simple-popover" variant="contained" color="primary" onClick={(e) => this.handlePopOver(e)}>
                    Comunity
                  </Button>
                  <Popover
                    id="simple-popover"
                    open={open}
                    anchorEl={this.state.anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <Typography className={classes.typography}>The content of the Popover.</Typography>
                  </Popover>
                </li>
              </ul>
            </div>
            <div className="buttons">
              <button className="filled-button">Create</button>
              <button className="stroked-button">Connect wallet</button>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
export default withStyles(styles)(Header)

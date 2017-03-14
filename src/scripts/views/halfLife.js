import React from 'react'

var HalfLife = React.createClass({
	 render: function() {
	 	return (
	 		<div className='half-life' >
	 			<h1>HalfLife</h1>
	 			<Dashboard />
	 		</div>
	 	)
 	}
})
//main component to control inputs & calculate factor level
var Dashboard = React.createClass({
	//this is the actual thing that returns percentage based on weight, dosage given, time since dose given and half life
	calculateFactorLevel: function(){
		//current dose is =dose * 0.5 to the factor of (number of hours/half life)
		var currentDose = this.state.dose * .5 ** (this.state.numberOfHoursAgo / this.state.halfLifeInHours);
		//full dose is how factor amount to be given is determined based on weight and what percent you want to go to
		var fullDose = (this.state.weight / 4.4) * 100
		//we have to do current dose/ full dose because we need to find actual % and not decimal
		var percentage = (currentDose / fullDose) * 100
		//rounds to whole integer and if anything was determined to be zero
		if (percentage > 0){
			return Math.round(percentage,0)
		} else {
			return 0
		}
	},
	//this sets the weight per user input
	_weight: function(event) {
		if (parseInt(event.target.value) < 0){
			return;
		}
		this.setState({
			weight: parseInt(event.target.value)
		})
	},
	//this sets the amount of hours ago the dose was given per user input
	_time: function(event) {
		if (parseInt(event.target.value) < 0){
			return;
		}
		this.setState({
			numberOfHoursAgo: parseInt(event.target.value)
		})
	},
	//this sets the dosage amount per user selection (will be changed in future to allow user to type in)
	_dose: function(event) {
		this.setState({
			dose: (event.target.value)
		})
	},
	//this sets the half life per user input. default is 12 as that's the advertised halflife for drug 
	//in question, though some people metabolize differently and half a smaller half life. (will allow more inputs later)
	_halfLifeHours: function(event) {
		this.setState({
			halfLifeInHours: (event.target.value)
		})
	},
	//the initial state of all the inputs
	getInitialState: function() {
		return {
			weight: 0,
			numberOfHoursAgo: 0,
			dose: 0,
			halfLifeInHours: 12
		}
	},

	 render: function() {
	 	//every time state changes, get percentage.
	 	var factorLevelPercentage = this.calculateFactorLevel()
	 	//the dude will have two classes always: dude and the class of dude based on percentage
	 	var dudeClassToUse = "dude"
	 	//image only has every 5th percentage, could be a calculation later
	 	if (factorLevelPercentage > 95){
	 		dudeClassToUse += " dude-100"
	 	} else if (factorLevelPercentage > 90){
	 		dudeClassToUse += " dude-95"
	 	} else if (factorLevelPercentage > 85){
	 		dudeClassToUse += " dude-90"
	 	} else if (factorLevelPercentage > 80){
	 		dudeClassToUse += " dude-85"
	 	} else if (factorLevelPercentage > 75){
	 		dudeClassToUse += " dude-80"
	 	} else if (factorLevelPercentage > 70){
	 		dudeClassToUse += " dude-75"
	 	} else if (factorLevelPercentage > 65){
	 		dudeClassToUse += " dude-70"
	 	} else if (factorLevelPercentage > 60){
	 		dudeClassToUse += " dude-65"
	 	} else if (factorLevelPercentage > 55){
	 		dudeClassToUse += " dude-60"
	 	} else if (factorLevelPercentage > 50){
	 		dudeClassToUse += " dude-55"
	 	} else if (factorLevelPercentage > 45){
	 		dudeClassToUse += " dude-50"
	 	} else if (factorLevelPercentage > 40){
	 		dudeClassToUse += " dude-45"
	 	} else if (factorLevelPercentage > 35){
	 		dudeClassToUse += " dude-40"
	 	} else if (factorLevelPercentage > 30){
	 		dudeClassToUse += " dude-35"
	 	} else if (factorLevelPercentage > 25){
	 		dudeClassToUse += " dude-30"
	 	} else if (factorLevelPercentage > 20){
	 		dudeClassToUse += " dude-25"
	 	} else if (factorLevelPercentage > 15){
	 		dudeClassToUse += " dude-20"
	 	} else if (factorLevelPercentage > 10){
	 		dudeClassToUse += " dude-15"
	 	} else if (factorLevelPercentage > 5){
	 		dudeClassToUse += " dude-10"
	 	} else {
	 		dudeClassToUse += " dude-5"
	 	}



	 	return (
	 		<div className='dashboard' >
	 		{/*displays the dude and moves it around the background via sprite technique*/}
	 		<div className={dudeClassToUse}>
	 		{/*instead of showing the 0,5,10% in the default pic we are showing an actual percentage*/}
	 			<div className="percentage">{factorLevelPercentage}%</div>
	 		</div>
	 			
	 			<div className='buttons'>
	 				<div>
		 				<label>Current Weight</label>
		 				<input type="number" 
			 				className="form-control"
		 					value={this.state.weight} 
		 					onChange={this._weight} 
		 					placeholder="Current Weight"/>
	 				</div>
	 				<div>
		 				<label>Factor Was Given How Many Hours Ago?</label>
		 				<input type="number" 
		 					className="form-control"
		 					value={this.state.numberOfHoursAgo} 
		 					onChange={this._time} 
		 					placeholder="Number of Hours Ago"/>
		 				</div>
	 				<div>
	 					<label>Select Dosage Given</label>
		 				<select
		 					value={this.state.dose}
		 					onChange={this._dose}
		 					className="form-control">
		 					<option value={0}>Select Dosage</option>
		 					<option value={765}>765 iu</option>
	  						<option value={1067}>1067 iu</option>
						</select>
					</div>
					<div>
						<label>Current Half Life</label>
		 				<select
		 					value={this.state.halfLifeInHours}
		 					onChange={this._halfLifeHours}
		 					className="form-control">
		 					<option value={12}>12hr Half-Life</option>
	  						<option value={6}>6hr Half-Life</option>
	  						<option value={4}>4hr Half-Life</option>
		 				</select>
	 				</div>
	 			</div>
	 		</div>
	 	)
 	}
})


export default HalfLife
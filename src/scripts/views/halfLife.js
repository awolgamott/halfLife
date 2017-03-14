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

var Dashboard = React.createClass({

	calculateFactorLevel: function(){
		var currentDose = this.state.dose * .5 ** (this.state.numberOfHoursAgo / this.state.halfLifeInHours);
		var fullDose = (this.state.weight / 4.4) * 100
		//console.log(this.state)
		// =765 * 0.5^(B3/6)
		var percentage = (currentDose / fullDose) * 100

		if (percentage > 0){
			return Math.round(percentage,0)
		} else {
			return 0
		}
	},

	_weight: function(event) {
		if (parseInt(event.target.value) < 0){
			return;
		}
		this.setState({
			weight: parseInt(event.target.value)
		})
	},
	
	_time: function(event) {
		if (parseInt(event.target.value) < 0){
			return;
		}
		this.setState({
			numberOfHoursAgo: parseInt(event.target.value)
		})
	},

	_dose: function(event) {
		this.setState({
			dose: (event.target.value)
		})
	},

	_halfLifeHours: function(event) {
		this.setState({
			halfLifeInHours: (event.target.value)
		})
	},

	getInitialState: function() {
		return {
			weight: 0,
			numberOfHoursAgo: 0,
			dose: 0,
			halfLifeInHours: 12
		}
	},

	 render: function() {

	 	var factorLevelPercentage = this.calculateFactorLevel()
	 	var dudeClassToUse = "dude"

	 	console.log("factorLevelPercentage", factorLevelPercentage)

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
	 		
	 		<div className={dudeClassToUse}>
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
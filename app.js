angular.module('Randomizer', ['ngStorage', 'angular-underscore'])
	.controller('AppController', function($scope, $rootScope, $localStorage) {
		//Lists
		$scope.teamList = [
			{ name: 'Kоманда 1', number: '1'}, { name: 'Kоманда 2', number: '2'}, { name: 'Kоманда 3', number: '3'},
			{ name: 'Kоманда 4', number: '4'}, { name: 'Kоманда 5', number: '5'}, { name: 'Kоманда 6', number: '6'},
			{ name: 'Kоманда 7', number: '7'}, { name: 'Kоманда 8', number: '8'}, { name: 'Kоманда 9', number: '9'},
			{ name: 'Kоманда 10', number: '10'}, { name: 'Kоманда 11', number: '11'}, { name: 'Kоманда 12', number: '12'},
			{ name: 'Kоманда 13', number: '13'}, { name: 'Kоманда 14', number: '14'}, { name: 'Kоманда 15', number: '15'},
			{ name: 'Kоманда 16', number: '16'}, { name: 'Kоманда 17', number: '17'}, { name: 'Kоманда 18', number: '18'},
			{ name: 'Kоманда 19', number: '19'}, { name: 'Kоманда 20', number: '20'}
			
		];
		$scope.playerList = [
			{ number: 1, fullName: 'Г1', team: { name: 'Kоманда 1', number: '1'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 2, fullName: 'Г2', team: { name: 'Kоманда 1', number: '1'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 3, fullName: 'Г3', team: { name: 'Kоманда 1', number: '1'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 4, fullName: 'Г4', team: { name: 'Kоманда 2', number: '2'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 5, fullName: 'Г5', team: { name: 'Kоманда 2', number: '2'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 6, fullName: 'Г6', team: { name: 'Kоманда 2', number: '2'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 7, fullName: 'Г7', team: { name: 'Kоманда 3', number: '3'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 8, fullName: 'Г8', team: { name: 'Kоманда 3', number: '3'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 9, fullName: 'Г9', team: { name: 'Kоманда 3', number: '3'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 10, fullName: 'Г10', team: { name: 'Kоманда 4', number: '4'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 11, fullName: 'Г11', team: { name: 'Kоманда 4', number: '4'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 12, fullName: 'Г12', team: { name: 'Kоманда 4', number: '4'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 13, fullName: 'Г13', team: { name: 'Kоманда 5', number: '5'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 14, fullName: 'Г14', team: { name: 'Kоманда 5', number: '5'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 15, fullName: 'Г15', team: { name: 'Kоманда 5', number: '5'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 16, fullName: 'Г16', team: { name: 'Kоманда 6', number: '6'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 17, fullName: 'Г17', team: { name: 'Kоманда 6', number: '6'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 18, fullName: 'Г18', team: { name: 'Kоманда 6', number: '6'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 19, fullName: 'Г19', team: { name: 'Kоманда 7', number: '7'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 20, fullName: 'Г20', team: { name: 'Kоманда 7', number: '7'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 21, fullName: 'Г21', team: { name: 'Kоманда 7', number: '7'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 22, fullName: 'Г22', team: { name: 'Kоманда 8', number: '8'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 23, fullName: 'Г23', team: { name: 'Kоманда 8', number: '8'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 24, fullName: 'Г24', team: { name: 'Kоманда 8', number: '8'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 25, fullName: 'Г25', team: { name: 'Kоманда 9', number: '9'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 26, fullName: 'Г26', team: { name: 'Kоманда 9', number: '9'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 27, fullName: 'Г27', team: { name: 'Kоманда 9', number: '9'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 28, fullName: 'Г28', team: { name: 'Kоманда 10', number: '10'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 29, fullName: 'Г29', team: { name: 'Kоманда 10', number: '10'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 30, fullName: 'Г30', team: { name: 'Kоманда 10', number: '10'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 31, fullName: 'Г31', team: { name: 'Kоманда 11', number: '11'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 32, fullName: 'Г32', team: { name: 'Kоманда 11', number: '11'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 33, fullName: 'Г33', team: { name: 'Kоманда 11', number: '11'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 34, fullName: 'Г34', team: { name: 'Kоманда 12', number: '12'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 35, fullName: 'Г35', team: { name: 'Kоманда 12', number: '12'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 36, fullName: 'Г36', team: { name: 'Kоманда 12', number: '12'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 37, fullName: 'Г37', team: { name: 'Kоманда 13', number: '13'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 38, fullName: 'Г38', team: { name: 'Kоманда 13', number: '13'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 39, fullName: 'Г39', team: { name: 'Kоманда 13', number: '13'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 40, fullName: 'Г40', team: { name: 'Kоманда 14', number: '14'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 41, fullName: 'Г41', team: { name: 'Kоманда 14', number: '14'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 42, fullName: 'Г42', team: { name: 'Kоманда 14', number: '14'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 43, fullName: 'Г43', team: { name: 'Kоманда 15', number: '15'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 44, fullName: 'Г44', team: { name: 'Kоманда 15', number: '15'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 45, fullName: 'Г45', team: { name: 'Kоманда 15', number: '15'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 46, fullName: 'Г46', team: { name: 'Kоманда 16', number: '16'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 47, fullName: 'Г47', team: { name: 'Kоманда 16', number: '16'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 48, fullName: 'Г48', team: { name: 'Kоманда 16', number: '16'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 49, fullName: 'Г49', team: { name: 'Kоманда 17', number: '17'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 50, fullName: 'Г50', team: { name: 'Kоманда 17', number: '17'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 51, fullName: 'Г51', team: { name: 'Kоманда 17', number: '17'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 52, fullName: 'Г52', team: { name: 'Kоманда 18', number: '18'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 53, fullName: 'Г53', team: { name: 'Kоманда 18', number: '18'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 54, fullName: 'Г54', team: { name: 'Kоманда 18', number: '18'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 55, fullName: 'Г55', team: { name: 'Kоманда 19', number: '19'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 56, fullName: 'Г56', team: { name: 'Kоманда 19', number: '19'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 57, fullName: 'Г57', team: { name: 'Kоманда 19', number: '19'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 58, fullName: 'Г58', team: { name: 'Kоманда 20', number: '20'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 59, fullName: 'Г59', team: { name: 'Kоманда 20', number: '20'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false },
			{ number: 60, fullName: 'Г60', team: { name: 'Kоманда 20', number: '20'}, gameMissing: false, tablesPlaying: 0, noUseInLast: false }
		];		
		
		//Form items
		$scope.team = { name: '' };
		
		//Randomizer Settings
		$scope.filter = {
			gameCount: 5,
			tableCount: 5
		}
		
		//Game definition objects
		$scope.roundList = [];
		$scope.gameList = [];
		$scope.game = {};
		
		$scope.addTeam = function(name) {
			var team = new Object();
			team.name = name;
			team.number = $scope.teamList.length + 1;
			
			$scope.teamList.push(team);
			
			$localStorage.teamList = $scope.teamList;
		}
		
		$scope.addPlayer = function(player) {
			var newPlayer = new Object();
			newPlayer.fullName = player.fullName;
			newPlayer.team = player.team;
			newPlayer.gameMissing = false;
			
			$scope.playerList.push(newPlayer);
			
			$localStorage.playerList = $scope.playerList;
		}
		
		$scope.clearStorage = function() {
			$scope.teamList = $localStorage.teamList = [];
			$scope.playerList = $localStorage.playerList = [];
		}
		
		$scope.log = function() {
			var teamArray1 = _.filter($scope.playerList, function(player) {	return player.tablesPlaying == 0; });
			var teamArray2 = _.filter($scope.playerList, function(player) {	return player.tablesPlaying == 1; });
			var teamArray3 = _.filter($scope.playerList, function(player) {	return player.tablesPlaying == 2; });
			var teamArray4 = _.filter($scope.playerList, function(player) {	return player.tablesPlaying == 3; });
			var teamArray5 = _.filter($scope.playerList, function(player) {	return player.tablesPlaying == 4; });
			
			console.log('0: ' + teamArray1.length);
			console.log('1: ' + teamArray2.length);
			console.log('2: ' +	teamArray3.length);
			console.log('3: ' + teamArray4.length);
			console.log('4: ' + teamArray5.length);
		}
		
		$scope.randomize = function() {
			var teamCount = $scope.teamList.length;
			var ended = false;
			//For each round
			for(var i = 0; i < $scope.filter.gameCount; i++) {
				var roundArray = [];
				var selectedRoundPlayers = [];
				
				$scope.log();
				//For each table
				for(j = 0; j < $scope.filter.tableCount; j++) {
					if(i == 4 && j == 4) { j++; continue; }
					
					var arraySelected = [];
					var filteredByTeams = [];
					
					var minAllowed = _.filter($scope.playerList, function(player) { return  i == 0 ? true : player.tablesPlaying == i - 1; });
					minAllowed = minAllowed.length > 0 ? minAllowed : _.filter($scope.playerList, function(player) { return  i == 0 ? true : player.tablesPlaying == i; });
					//Filter players by teams
					for(l = 0; l < teamCount; l++) {
						var teamArray = _.filter(minAllowed, function(player) {
							return Number(player.team.number) === (l + 1) && !_.contains(selectedRoundPlayers, player) && player.tablesPlaying < 4;
						});
						if(teamArray.length > 0)
							filteredByTeams.push(teamArray);
					}
					
					//Generate captain's table
					if(i == 0 && j == 0) {
						for(var cIndex = 0; cIndex < 12; cIndex++) {
							var player = filteredByTeams[0][0];
							//Ensure only one player from team at the table
							filteredByTeams.splice(0, 1);
							
							player.tablesPlaying++;
							
							arraySelected.push(player);
							selectedRoundPlayers.push(player);
						}
						
						roundArray.push(arraySelected);
						continue;
					}
					
					//Generate closed game for 4th round
					if(i > 0 && j == 0) {
						var teamArray = $scope.roundList[i - 1][4];
						for(var cIn = 0; cIn < teamArray.length; cIn++) {
							var player = teamArray[cIn];
							
							player.tablesPlaying++;
							
							arraySelected.push(player);
							selectedRoundPlayers.push(player);
						}
						
						roundArray.push(arraySelected);
						
						$scope.log();
						
						continue;
					}
					
					
					//Start selecting for 12 players for table
					for(k = 0; k < 12; k++) {
						var player = {};
						
						var playerNum = -1;
						var teamNum = -1;
						
						var teamC = filteredByTeams.length - 1;
						
						//Ensure unique player on table
						do { 
							teamNum = _.random(0, teamC);
							var selectedTeam = filteredByTeams[teamNum];
							
							//Select a team with maximum free players (may be few in a row)
							var teamByNumCount = [];
							var teamIndexes = [];
							for(var q = 0; q < filteredByTeams.length; q++) {
								if(selectedTeam.length <= filteredByTeams[q].length) {
									selectedTeam = filteredByTeams[q];
								}
							}
							
							for(var q = 0; q < filteredByTeams.length; q++) {
								if(selectedTeam.length === filteredByTeams[q].length) {
									teamByNumCount.push(filteredByTeams[q]);
									teamIndexes.push(q);
								}
							}
							
							if(teamByNumCount.length == 0) { 
								teamByNumCount.push(selectedTeam); 
								teamIndexes.push(teamNum);
							}
							
							var allowedUsers = [];
							
							for(var q = 0; q < teamByNumCount.length; q++) {
								for(var qt = 0; qt < teamByNumCount[q].length; qt++) {
									if(teamByNumCount[q][qt].tablesPlaying <= i) {
										teamByNumCount[q][qt].teamNum = teamIndexes[q];
										allowedUsers.push(teamByNumCount[q][qt]);
									}
								}
							}
							
							allowedUsers = _.shuffle(allowedUsers); 
							playerNum = _.random(0, allowedUsers.length - 1);
							
							player = allowedUsers[playerNum];
							teamNum = player.teamNum;
							
							//set this as first table for 4th round
							if(i == 2 && j == 4) player.noUseInLast = true;
						} while(_.contains(arraySelected, player) || player.tablesPlaying >= 4)
						
						//Ensure only one player from team at the table
						filteredByTeams.splice(teamNum, 1);
						//Do not increment for those who are not included in round
						if(j != 4) player.tablesPlaying++;
						
						arraySelected.push(player);
						selectedRoundPlayers.push(player);
					}
					
					arraySelected = _.sortBy(arraySelected, 'number');
					roundArray.push(arraySelected);
				}
				
				$scope.roundList.push(roundArray);	
			}
		}
		
	});

//TODO: One user misses one game
//TODO: Each user - different table
//TODO: Normal Distribution
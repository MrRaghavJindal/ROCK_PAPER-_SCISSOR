
        var com_scr = 0;
        var usr_scr = 0;
            function s()
            {
                //0=stone
                //1=paper
                //2=scissor
                var data = Math.floor(Math.random()*3);

                if(data==0)
                {
                        document.getElementById("results").innerHTML = "DRAW";
                        document.getElementById("results").style.color = "white";
                }
                else if(data==1)
                {
                        document.getElementById("results").innerHTML = "YOU LOOSE IT";
                        document.getElementById("results").style.color = "rgb(255, 0, 0)";
                        com_scr=com_scr+1;
                        document.getElementById("computer_score").innerHTML = com_scr;
                }
                else if(data==2)
                {
                        document.getElementById("results").innerHTML = "YOU WIN IT";
                        document.getElementById("results").style.color = "rgb(68, 255, 0)";
                        usr_scr=usr_scr+1;
                        document.getElementById("user_score").innerHTML = usr_scr;
                }
            }
            function p()
            {
                //0=stone
                //1=paper
                //2=scissor
                var data = Math.floor(Math.random()*3);

                if(data==0)
                {
                        document.getElementById("results").innerHTML = "YOU WIN IT";
                        document.getElementById("results").style.color = "rgb(68, 255, 0)";
                        usr_scr=usr_scr+1;
                        document.getElementById("user_score").innerHTML = usr_scr;
                }
                else if(data==1)
                {
                        document.getElementById("results").innerHTML = "DRAW";
                        document.getElementById("results").style.color = "white";
                }
                else if(data==2)
                {
                        document.getElementById("results").innerHTML = "YOU LOOSE IT";
                        document.getElementById("results").style.color = "rgb(255, 0, 0)";
                        com_scr=com_scr+1;
                        document.getElementById("computer_score").innerHTML = com_scr;
                }
            }
            function sci()
            {
                //0=stone
                //1=paper
                //2=scissor
                var data = Math.floor(Math.random()*3);

                if(data==0)
                {
                        document.getElementById("results").innerHTML = "YOU LOOSE IT";
                        document.getElementById("results").style.color = "rgb(255, 0, 0)";
                        com_scr=com_scr+1;
                        document.getElementById("computer_score").innerHTML = com_scr;
                }
                else if(data==1)
                {
                        document.getElementById("results").innerHTML = "YOU WIN IT";
                        document.getElementById("results").style.color = "rgb(68, 255, 0)";
                        usr_scr=usr_scr+1;
                        document.getElementById("user_score").innerHTML = usr_scr;
                }
                else if(data==2)
                {
                        document.getElementById("results").innerHTML = "DRAW";
                        document.getElementById("results").style.color = "white";
                }
            }
# gulp 걸프



## What is Gulp?

> gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and vuild something.

gulp 는 당신의 개발 작업 흐름에서 고통스럽거나 시간이 걸리는 tasks를 자동화할수 있는 툴킷이다. 그래서 당신은 난잡함을 멈추고 무언가를 빌드를 할수 있다.



## Gulp 특징?

#### 간단한 사용

설정보다 코드를, node best practice, 그리고 최소한의 API 노출을 통해서 Gulp는 여러가지 것들을 단순하게 만든다.

#### 효율적인 빌드

node stream들의 힘을 사용해서 Gulp는 파일을 디스크에 쓰지 않는 빠른 빌드를 제공한다.

#### 퀼리티 에코시스템

엄격한 가이드라인을 실행시킴으로서 예상한 대로 작업이 진행되고 플러그인을 단순하게 유지할수 있게 한다.

#### 설명

- 빌드 시스템은 단순히 task runner이라고 부르며 반복적으로 자동화된 task들의 모음이다.
- 일반적인 사용은 전처리된 CSS, 자바스크립트 컴파일, 파일들 연결, 최소화, 개발 빌드 등의 일들을 패주면서 패키지 매니저와 같은 도구들과 함께 작업을 한다.






## 시작하기

```shell
1. 먼저 NodeJS를 설치한다.
2. NodeJS가 설치되면 NPM도 자동으로 설치가 된다. 혹시나 제대로 작동이 안되면 검색
3. 이후 터미널, CMD에서 아래의 명령어를 친다.

$ mkdir 원하는폴더이름			 
$ cd 원하는폴더이름
$ npm init						# 프로젝트초기화인데 그냥 엔터만 쳐준다.
$ npm install gulp-cli -g		# npm을 통해 gulp CLI를 전역 설치
$ npm install gulp --save-dev	# gulp는 해당 프로젝트 폴더에 걸치한다. 개발과정에만 필요.
								# gulp 플러그인들을 설치할 때에도 --save-dev 옵션을 줘야 한다.
$ touch gulpfile.js				# gulpfile.js 생성 [ 맥 기준 ]
# 참고로 윈도우의 경우 그냥 해당 폴더 안에서 해당 js 파일을 만든다.

# gulpfile.js
var gulp = require('gulp');
gulp.task('default', function(){
  // 기본 작업 코드를 이곳에 작성
})

$ gulp							# gulp 실행
```



## 플러그인

gulp에 사용되는 플러그인들은 devDependencies로 먼저 설치해주어야 한다.

| 이름                | 설명                                 |
| ----------------- | ---------------------------------- |
| gulp-websrver     | 웹서버처럼 동작하게 하는 플러그인                 |
| gulp-concat       | js 파일 병합을 위한 플러그인                  |
| gulp-uglify       | js 파일 압축을 위한 플러그인                  |
| gulp-minify-html  | html 파일 minify를 위한 플러그인            |
| gulp-sass         | sass 파일을 컴파일하기 위한 플러그인             |
| gulp-minify-css   | css 파일을 압축하기 위한 플러그인               |
| gulp-livereload   | 웹 브라우저를 리로드 하기 위한 플러그인             |
| gulp-util         | 로깅용으로 쓴다고 한다. 그외 기능도 있을듯..         |
| gulp-jshint       | 자바스크립트 코드 문법 검사                    |
| gulp-htmlhint     | html 코드 문법 검사                      |
| gulp-csshint      | css 코드 문법 검사                       |
| gulp-jasmine      | 유닛 테스트                             |
| gulp-rename       | 이름 변경                              |
| gulp-autoprefixer | 벤더프리픽스 자동생성과 유사한 기능                |
| gulp-load-plugins | 여러 플러그인들을 require 직접 하지 않도록 줄여주는 것 |



## JS 파일을 최소화

js 폴더를 하나 만들고, 그안에 js 파일을 하나 생성한다.

```$ npm install --save-dev gulp-uglify``` 

```javascript
// gulpfile.js 에서 아래와 같이 task를 준다.
gulp.task('default', function(){
    console.log('Hello Gulp?');
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});
// 참고로 src 안에 배열로 넣어도 된다.
```

저장후에 ```gulp``` 라고 터미널에 커맨드를 넣으면 build/js 폴더내에 압축된 파일이 생성된다.



## CSS 파일을 최소화

```javascript
var minifyCss = require('gulp-minify-css');
gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
  	.pipe(minifyCss({compatibility:'ie8'}))
  	.pipe(gulp.dest('build/css'));
});
```



## 파일 합치기

```javascript
//concat으로 js 파일 연결하기
var concat = require('gulp-concat');
gulp.task('concatTest', function(){
  return gulp.src('./js/*.js')
  	.pipe(concat('totalScript.js'))
  	.pipe(gulp.dest('build/js'));
})
```



## 이름 변경

```javascript
var rename = require('gulp-rename');
gulp.task('renameTest', function(){
  return gulp.src('target.txt')
  	.pipe(rename("newTarget.txt"))
  	.pipe(gulp.dest('./dist'));
})
```



## gulp-util

```javascript
// gulp util를 이용한 로딩
var gutil = require('gulp-util');
gulp.task('loggingtest', function(){// 컬러지정
  gutil.log('stuff happened', 'Really it did', gutil.colors.yellow('123'));
  gutil.beep();
  
  var newPath = gutil.replaceExtension('sample.txt', '.js'); 
  gutil.log("replaceExtension : ", newPath); //확장자 변환하여 반환
  
  var opt = {
    name:'todd',
    file:'js/testUglify.js'
  };
  var tester = gutil.template('test:<%=name %>, file: <%=file %>', opt);
  gutil.log("template : ", gutil.colors.red(tester));
  //템플릿 지정
})
```



## 밴더프리픽스

```javascript
var autoprefixer = require('gulp-autoprefixer');
gulp.task('autoPrefixer', function() {
  return gulp.src('css/app.css')
  	.pipe(autoprefixer({
    	browsers: ['last 2 versions'], // 여러가지 옵션들이 있으니 참조가 필요하다.
    	cascade:false
  	}))
  	.pipe(gulp.dest('dist'));
});
```



## task 분리

```javascript
gulp.task('scripts', function(){
  gulp.src('js/*.js')
  	.pipe(uglify*())
  	.pipe(gulp.dest('buld/js'));
});

gulp.task('hello', function(){
  console.log("hello gulp?");
});

// gulp.task(name, deps, func);
// name : task의 이름을 지정, 공백 X
// deps : 현재 선언하고 있는 task를 수행하기 전에 먼저 실행되어야 하는 task 배열이다.
// func : 실제 수행할 task의 내용을 정의하는 function이다.
// 생략해도 잘 돌아간다.
// 분리했을 때에는 반드시 아래와 같이 default task를 줘야 gulp 명령어만 입력했을 때 작동된다.
gulp.task('default', ['scripts', 'hello']);
```



## watch를 통한 실시간 변경

```javascript
gulp.task('watch', function(){
  // js 폴더 안에 js 확장자 파일이 변경되면 []안의 task가 실행된다.
  gulp.watch('js/*.js', ['uglify']); 
  gulp.watch('css/*.css', ['cssMin']); //이것을 여러개 붙이면 여러개가 watch된다.
  gulp.watch('html/*.html', ['moveHTML']); 
});

// 아래 gulp.task('default', ['uglify', 'watch']); 이라고 추가를 해줘야 한다.
```



## BrowerSync

웹서버를 작동하면서, 자동 리로드, 다양한 기기에서 화면을 보게 해주며 화면 위치추적까지 가능하다.
백엔드 서버 없이 프론트엔드 화면을 자체적으로 보여주는 클라이언트 렌더링이 가능하며 설정 변경시 리로딩된다.

http://www.browsersync.io/docs/gulp/  참조할 것

```npm install browser-sync gulp —save-dev```





출처

http://programmingsummaries.tistory.com/356

https://www.slideshare.net/meadunhansa/gulp-48608642?qid=e5a94921-e483-48ee-803e-be2bd644019a&v=&b=&from_search=1
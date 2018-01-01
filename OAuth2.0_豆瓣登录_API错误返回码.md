在遵循OAuth2.0协议，开始制作豆瓣过程中，经常会遇到以下两个错误：
1、invalid_request: not_trial_user:unvs
意思是：没有授权该用户使用应用；
解决方法：应用未通过审核前，需要在应用“测试用户”中，添加测试用户。
2、另一个错误是添加测试用户后，回调用户信息出现：array(3) { ["msg"]=> string(15) "need_permission" ["code"]=> int(1000) ["request"]=> string(16) "GET /v2/user/~me" }
意思是：需要授权、权限，但是当你到应用中心查看API权限时，也勾选了，但就是没有权限，这里告诉你当应用未通过审核是，GET /v2/user/~me这个接口不能使用，只能使用GET /v2/user/:name获取用户信息；
解决方法：通过第一步code获取的token，其中含有name参数，再调用GET /v2/user/:name这个接口获取用户信息。
下面是豆瓣官方对于API调用过程中出现的错误代码，对应的错误说明，分享过来，便于大家参考说明，及时可以解决开发中出现的问题。
错误代码	错误说明
100	invalid_request_scheme 错误的请求协议
101	invalid_request_method 错误的请求方法
102	access_token_is_missing 未找到access_token
103	invalid_access_token access_token不存在或已被用户删除
104	invalid_apikey apikey不存在或已删除
105	apikey_is_blocked apikey已被禁用
106	access_token_has_expired access_token已过期
107	invalid_request_uri 请求地址未注册
108	invalid_credencial1 用户未授权访问此数据
109	invalid_credencial2 apikey未申请此权限
110	not_trial_user 未注册的测试用户
111	rate_limit_exceeded1 用户访问速度限制
112	rate_limit_exceeded2 IP访问速度限制
113	required_parameter_is_missing 缺少参数
114	unsupported_grant_type 错误的grant_type
115	unsupported_response_type 错误的response_type
116	client_secret_mismatch client_secret不匹配
117	redirect_uri_mismatch redirect_uri不匹配
118	invalid_authorization_code authorization_code不存在或已过期
119	invalid_refresh_token refresh_token不存在或已过期
120	username_password_mismatch 用户名密码不匹配
121	invalid_user 用户不存在或已删除
122	user_has_blocked 用户已被屏蔽
123	access_token_has_expired_since_password_changed 因用户修改密码而导致access_token过期
124	access_token_has_not_expired access_token未过期
125	invalid_request_scope 访问的scope不合法，开发者不用太关注，一般不会出现该错误
999	unknown 未知错误
HTTP状态码	说明
200	表明api的请求正常
400	表明api的请求出错，具体原因参考上面列出的错误码